<?php

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 

use Symfony\Component\Process\Process; 

class SelfManagementController extends Controller
{ 
    public function __construct() 
    {
        $this->middleware(['auth', 'isAdmin']);
    }

   public function command_exec(Request $request)
   {
       $response = "";
       define('WORKDIR',  'cd ../impact && '); 
       $process = new Process(WORKDIR.$request->command);
       $process->run();

       foreach ($process as $type => $data)
       {
           if ($process::OUT === $type)
           {
               $response = $data;

           }
           else
           {
               $response = $data;
           }
       }

       return json_encode($response);
   }
} 