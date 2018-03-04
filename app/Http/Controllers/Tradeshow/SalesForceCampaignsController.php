<?php

namespace App\Http\Controllers\Tradeshow;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use App\Services\SalesForceAPI;
use App\Services\GeoIP;
use App\Models\Tradeshow_campaign;
use carbon\Carbon;
use Auth;
use Mockery\Exception;

class SalesForceCampaignsController extends Controller
{
    protected $sf;
    protected $geoip;

	public function __construct()
    {
		$this->middleware('auth');
        $this->sf = resolve(SalesForceAPI::class);
        $this->geoip = resolve(GeoIP::class);
    }


    public function index(Request $request)
    {
        $data = collect();

        try
        {

            $dateFromSF = Carbon::now()->startOfYear()->toDateString();
            $dateToSF   = Carbon::now()->endOfYear()->toDateString();

            $soql_query = "SELECT Campaign.Id, Campaign.Name,
                Campaign.StartDate, Campaign.EndDate, Campaign.IsActive
                FROM Campaign";
            if (!$request->parent)
            {
                $soql_query .= " WHERE Campaign.Name LIKE '%>%'";
            }
            else
            {
                $soql_query .= " WHERE Campaign.Name LIKE '%Parent%'";
            }

            $soql_query .= " AND Campaign.IsActive = TRUE AND Campaign.StartDate >= $dateFromSF AND Campaign.EndDate <= $dateToSF";
            $response = $this->sf->Query($soql_query);

            if (isset($response['records']))
            {
                foreach ($response['records'] as $value)
                {
                    $data->push([
                        'value'  => $value['Id'],
                        'label'  => $value['Name'],
                    ]);
                }

                return response()->json(['campaign' => ['data' => $data]]);
            }

        }
        catch (\Exception $e)
        {
            return response()->json($e, 500);
        }
    }

    public function map_brand_2_campaign(Request $request)
    {
        $validator = Validator::make($request->all(), [
			"brand"				=>	"required",
            "active"	        =>	"required",
            "childCampaign"     =>	"required",
          ]);

        if ($validator->passes())
        {
            try
            {
                $campaign = new Tradeshow_campaign;
                $campaign->brand_id = $request->brand;
                $campaign->tradeshow_tradeshow_edition_id = $request->active;
                $campaign->campaign_SF = $request->childCampaign;
                $campaign->save();

                $this->geoip->setIP(\Request::ip());
                activity()
                ->withProperties([
                    'ip'      => \Request::ip(),
                    'country' => $this->geoip->getCountry(),
                    'region'  => $this->geoip->getRegion()
                ])
                ->log('Maped new campaign '.$campaign->brand->name .' to '.$campaign->tradeshowEdition->name.'in '.class_basename($campaign));

                return response()->json(config('messages.code200'), 200);
            }
            catch (\Exception $e)
            {
                return $e;
                return response()->json(config('messages.code500'), 500);
            }

        }
        else
        {
            $errorMessage = array();
            foreach ($validator->errors()->getMessages() as $key => $value)
            {
                $errorMessage[$key] = current($value);
            }

            return response()->json($errorMessage, 400);
        }
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
			"name"		=>	"required",
            "dateFrom"	=>	"required|date",
			"dateTo"	=>	"required|date",
          ]);

        if ($validator->passes())
        {

            $jsonContent = json_encode([
                'Name'		=> $request->name,
                'IsActive'	=> true,
                'Type'		=> 'Exhibition fair',
                'Status'	=> ($request->status) ? $request->status : 'Planned',
                'ParentId'  => ($request->parentCampaign != null) ? $request->parentCampaign : null,
                'StartDate' => $request->dateFrom,
                'EndDate' 	=> $request->dateTo,
            ]);

            $response = $this->sf->Insert('Campaign',$jsonContent);

            if ($response['success'])
            {
                $this->geoip->setIP(\Request::ip());
                activity()
                ->withProperties([
                    'ip'      => \Request::ip(),
                    'country' => $this->geoip->getCountry(),
                    'region'  => $this->geoip->getRegion()
                ])
                ->log('created new campaign '.$request->name .' in Salesforce starts in: '.$request->dateFrom.' ends: '.$request->dateTo);

                return response()->json(config('messages.code200'), 200);
            }
        }
        else
        {
            $errorMessage = array();
            foreach ($validator->errors()->getMessages() as $key => $value)
            {
                $errorMessage[$key] = current($value);
            }

            return response()->json($errorMessage, 400);
        }
    }

    public function campaign_status()
    {
        $data = collect();
        $response = $this->sf->DescribeObject('Campaign');
        if ($response['fields'])
		{
            foreach ($response['fields'] as $value)
            {
                if($value['name'] == 'Status')
                {
                    foreach ($value['picklistValues'] as $value2)
                    {
                        $data->push([
                            "label" => $value2['label'],
                            "value" => $value2['value']
                            ]);
                    }
                }
            }
        }
        else
        {
            return response()->json(config('messages.code500'), 500);
        }

        return json_encode(['status' => ['data' => $data]]);
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
			"brand"				=>  "required",
            "tradeshowEdition"	=>	"required",
            "campaignSF"        =>	"required",
          ]);

          if ($validator->passes())
          {
            $jsonContent = json_encode([
                'Name'		    => $request->name,
                'IsActive'		=> true,
                'Type'		    => 'Exhibition fair',
                'Status'		=> $request->status,
                'ParentId'      => ($request->parentCampaign != null) ? $request->parentCampaign : null,
                'StartDate'		=> $request->dateFrom,
                'EndDate' 	    => $request->dateTo,
            ]);

            $response = $this->sf->Insert('Campaign',$jsonContent);

            if ($response['success'])
            {

                $this->geoip->setIP(\Request::ip());
                activity()
                ->withProperties([
                    'ip'      => \Request::ip(),
                    'country' => $this->geoip->getCountry(),
                    'region'  => $this->geoip->getRegion()
                ])
                ->log('Updated campaign '.$request->name .' in Salesforce starts in: '.$request->dateFrom.' ends: '.$request->dateTo);

                return response()->json(config('messages.code200'), 200);
            }
        }
        else
        {
            $errorMessage = array();
            foreach ($validator->errors()->getMessages() as $key => $value)
            {
                $errorMessage[$key] = current($value);
            }

            return response()->json($errorMessage, 400);
        }
    }
}