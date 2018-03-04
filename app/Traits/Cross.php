<?php
namespace App\Traits;

use Illuminate\Http\Request;
use App\Models\Network_lead;
use App\Models\Network_cross;
use DB;
use Auth;

trait Cross
{
    public function cross(Request $request)
    {

        $this->validate($request, [
            "id"            => "required|integer",
            "networksList"  => "required"
        ]);

        $user_networks_states = Network_cross::where([
            ['lead_id',$request->id],
            ['brand_id',Auth::User()->brand_id]
        ])
        ->get();

        $user_networks  = Network_lead::where('lead_id', $request->id)->get();

        /**
         *   its executed when the is no regist of the contact
        */
        if ($user_networks_states->count() <= 0 && $user_networks->count() <= 0)
        {
            foreach ($request->networksList as $key)
            {
                DB::transaction(function () use($request,$key)
                {
                    $cross                            =  new Network_lead;
                    $cross->lead_id                   =  $request->id;
                    $cross->social_network_id         =  $key["networkId"];
                    $cross->link                      =  $key["link"];
                    $cross->save();

                    $networks                         = new Network_cross;
                    $networks->user_id                = Auth::user()->id;
                    $networks->lead_id                = $request->id;
                    $networks->network_lead_id        = $cross->id;
                    $networks->network_lead_state_id  = $key['statusId'];
                    $networks->brand_id               = Auth::User()->brand_id;
                    $networks->save();
                });
            }
        }
        /**
         * its executed when both of the results are already created
         * and only want to update the data.
         */
        elseif($user_networks_states->count() > 0 && $user_networks->count() > 0)
        {
            foreach ($request->networksList as $key)
            {
                DB::transaction(function () use($request,$key)
                {
                    $cross  =  Network_lead::where([
                        ['lead_id',$request->id],
                        ['social_network_id',$key['networkId']]
                    ])->first();

                    if ($key['link'] != null)
                    {
                        $cross->link  =  $key['link'];
                        $cross->save();
                    }

                    $networks  = Network_cross::with(
                    'network_lead'
                    )
                    ->where([
                        ['brand_id',Auth::User()->brand_id],
                        ['network_lead_id',$cross->id],
                    ])->first();
                    $networks->network_lead_state_id = $key['statusId'];
                    $networks->save();
                });
            }
        }
        /**
         * its executed when contact already exists but the network for my
         * brand doesnt exist so it uses the existing contact and creates
         * a new one
         */
        else
        {
            foreach ($request->networksList as $key)
            {
                DB::transaction(function () use($request,$key)
                {
                    $cross  =  Network_lead::where([
                        ['lead_id',$request->id],
                        ['social_network_id',$key['networkId']]
                    ])->first();

                    if ($key['link'] != null)
                    {
                        $cross->link  =  $key['link'];
                        $cross->save();
                    }

                    $networks                         = new Network_cross;
                    $networks->user_id                = Auth::user()->id;
                    $networks->lead_id                = $request->id;
                    $networks->network_lead_id        = $cross->id;
                    $networks->network_lead_state_id  = $key['statusId'];
                    $networks->brand_id               = Auth::User()->brand_id;
                    $networks->save();
                });
            }
        }
    }
}