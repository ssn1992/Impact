<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ErrorAPI extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * The body of the message.
     *
     * @var string
     */
    protected $content;

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
            return $this->view('emails.errorsAPI')
                        ->with([
                            'title'             => $this->content['title'],
                            'error_description' => $this->content['error_description'],
                        ]);
        }
}
