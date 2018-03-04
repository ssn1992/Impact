<?php

namespace App\Http\Controllers\Tradeshow;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Tradeshow_tradeshow_edition;
use App\Models\Tradeshow;
use App\Models\Tradeshow_category;
use App\Models\Country;
use App\Models\Country_state;
use App\Models\Tradeshow_interested_in;
use App\Models\Tradeshow_client_acquire;
use Carbon\carbon;

class ComboController extends Controller
{
	public function __construct()
    {
        $this->middleware('auth');
    }

    public function all_fairs(Request $request)
    {
        /**
         *		Gets all the tradeshows stored in the DB and
         *       executes the search on the intermidle table to get the
         *       edition that belong on the tradeshow
         */
		$startOfMonth	= Carbon::createFromFormat('Y-m-d H:i:s', $request->dateFrom)->startOfMonth()->toDateString();

        $endOfMonth		= Carbon::createFromFormat('Y-m-d H:i:s', $request->dateTo)->endOfMonth()->toDateString();


		$allFairs = Tradeshow_tradeshow_edition::whereHas("Tradeshow_time", function($query) use($startOfMonth, $endOfMonth)
		{
			$query->where('dateFrom', '>=' ,$startOfMonth)->where('dateTo', '<=' ,$endOfMonth);
		})->get();

		$data = $allFairs->map(function ($fair)
		{
			return [
				"value"=>$fair->Tradeshow->id,"label"=>$fair->Tradeshow->name,
			];
		});

		if ($data->count()<1)
		{
            $data[] = [
				"value" => null,
				"label"	=> "No Records"
			];

		}
		else
		{
			$data->prepend(["value" => null,"label"=>"All TradeShows"]);
        }

    	return json_encode(['fairs' => ['data' => $data]]);
    }


	/**
	*		Recives fair id
	*
	*		Sends edition to that fair
	*/
	public function all_editions(Request $request)
	{

		$allTradeshow = Tradeshow_tradeshow_edition::where("tradeshow_id", "=", $request->fairs)->get();

		$tradeshow[0] = [
			"value" => null,
			"label"	=> "All Editions"
		];

		foreach($allTradeshow as $key => $value){
			$tradeshow[$key+1] = [
				"value" => $value->Tradeshow_edition->id,
				"label"	=> $value->Tradeshow_edition->name
			];
		}
		return json_encode(['fairs' => ['data' => $tradeshow]]);

	}

	public function all_times(Request $request)
	{
		/**
		*		Gets all the tradeshows stored in the DB and
		*       executes the search on the intermidle table to get the
		*       edition that belong on the tradeshow
		*/
		$allTimes = Tradeshow_tradeshow_edition::where("tradeshow_edition_id", "=", $request->fairsLocation)->get();

        $times = $allTimes->unique("tradeshow_id");

		$data = $times->map(function ($time)
		{
			return [
				'value'     => $time->Tradeshow_time->id,
				'label'     => $time->Tradeshow_time->name . " " . Carbon::createFromFormat("Y-m-d",$time->Tradeshow_time->dateTo)->year,
			];
		});
		$data = $data->toArray();

		array_unshift($data, array("value" => null,"label"=>"All Times"));

		return json_encode(['fairs' => ['data' => $data]]);
	}

	public function all_available_fairs()
	{

		$allTimes = Tradeshow_tradeshow_edition::where('active',1)->get();

		$data = $allTimes->map(function ($time)
		{
			return [
				'value'     => $time->id,
				'label'     => $time->tradeshow->name . " " .
				$time->tradeshow_edition->name . " " .
				$time->Tradeshow_time->name . " " .
				Carbon::createFromFormat("Y-m-d", $time->Tradeshow_time->dateTo)->year
			];
		});

		return json_encode(['fairs' => ['data' => $data]]);
	}

	public function tradeshow_category()
	{
		$AllCategories = Tradeshow_category::all();

		$data = $AllCategories->map(function ($category)
		{
			return
			[
				'value'     => $category->id,
				'label'     => $category->name,
			];
		});

		return json_encode(['cats' => ['data' => $data]]);
	}

	public function tradeshow_interested_list()
	{
		$interedtedList = Tradeshow_interested_in::all();

		$data = $interedtedList->map(function ($list)
		{
			return
			[
				'value'     => $list->id,
				'label'     => $list->name,
			];
		});

		return json_encode(['cats' => ['data' => $data]]);
	}

	public function tradeshow_client_acquire()
	{
		$interedtedList = Tradeshow_client_acquire::all();

		$data = $interedtedList->map(function ($list)
		{
			return
			[
				'value'     => $list->id,
				'label'     => $list->name,
			];
		});

		return json_encode(['clientAcquired' => ['data' => $data]]);
	}
}
