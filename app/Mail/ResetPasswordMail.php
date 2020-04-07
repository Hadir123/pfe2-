<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ResetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;
public $tokenn;
    /**
     * Create a new message instance.
     *
     * @return void
     *
     */
    public function __construct($tokenn)
    {
        //
        $this->tokenn=$tokenn ;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('Email.password')->with(['token'=>$this->tokenn,'hadira'=>'hhhh']);
    }
}
