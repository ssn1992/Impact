<?php 
 
namespace App\Mail; 
 
use Illuminate\Bus\Queueable; 
use Illuminate\Mail\Mailable; 
use Illuminate\Queue\SerializesModels; 
use Illuminate\Contracts\Queue\ShouldQueue; 
 
class Report extends Mailable 
{ 
    use Queueable, SerializesModels; 
 
    /** 
     * Create a new message instance. 
     * 
     * @return void 
     */ 
    public function __construct($content) 
    { 
        $this->content = $content; 
 
    } 
 
    /** 
     * Build the message. 
     * 
     * @return $this 
     */ 
    public function build() 
    { 
        return $this->view('emails.report') 
                    ->with([ 
                        'id'            => $this->content['id'], 
                        'name'          => $this->content['name'], 
                        'brand'         => $this->content['brand'], 
                        'roles'         => $this->content['roles'], 
                        'permissions'   => $this->content['permissions'],
                        'tittle'        => $this->content['tittle'],
                        'text'          => $this->content['text'], 
                    ]); 
    } 
}