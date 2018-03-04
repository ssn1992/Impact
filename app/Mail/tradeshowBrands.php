<?php 
 
namespace App\Mail; 
 
use Illuminate\Bus\Queueable; 
use Illuminate\Mail\Mailable; 
use Illuminate\Queue\SerializesModels; 
use Illuminate\Contracts\Queue\ShouldQueue; 
 
class tradeshowBrands extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($country, $brand)
    {
        $this->country = $country;
        $this->brand   = $brand;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        switch ($this->brand)
        {
            case 'Boca do Lobo':
                return $this->view('emails.auto-reply.BL.en.index');
                break;

            case 'BRABBU':
                switch ($this->country)
                {
                    case 'FR':
                        return $this->from('info@brabbu.com')
                                    ->subject(' Je vous remercie de votre visite ' . $this->brand . ' à Maison & Objet!')
                                    ->view('emails.auto-reply.BB.fr.index');
                        break;

                    case 'IT':
                        return $this->from('info@brabbu.com')
                                    ->subject(' Grazie per aver visitato ' . $this->brand . ' a Maison & Objet!')
                                    ->view('emails.auto-reply.BB.it.index');
                        break;

                    case 'DE':
                        return $this->from('info@brabbu.com')
                                    ->subject(' Vielen Dank für Ihren Besuch ' . $this->brand . ' bei Maison & Objet!')
                                    ->view('emails.auto-reply.BB.de.index');
                        break;

                    case 'RU':
                        return $this->from('info@brabbu.com')
                                    ->subject(' Благодарим вас за посещение ' . $this->brand . ' на Maison & Objet!')
                                    ->view('emails.auto-reply.BB.ru.index');
                        break;

                    case 'ES':
                        return $this->from('info@brabbu.com')
                                    ->subject(' Gracias por visitarnos ' . $this->brand . ' en Maison & Objet!')
                                    ->view('emails.auto-reply.BB.es.index');
                        break;

                    default: return $this->from('info@brabbu.com')
                                         ->subject(' Thank you for visiting ' . $this->brand . ' at Maison & Objet!')
                                         ->view('emails.auto-reply.BB.en.index');
                }
                break;

            case 'Essential Home':
                switch ($this->country)
                {
                    case 'FR':
                        return $this->from('info@essentialhome.eu')
                                    ->subject(' Je vous remercie de votre visite ' . $this->brand . ' à Maison & Objet!')
                                    ->view('emails.auto-reply.EH.fr.index');
                        break;

                    case 'RU':
                        return $this->from('info@essentialhome.eu')
                                    ->subject(' Благодарим вас за посещение ' . $this->brand . ' на Maison & Objet!')
                                    ->view('emails.auto-reply.EH.ru.index');
                        break;

                    case 'US':
                        return $this->from('info@essentialhome.eu')
                                    ->subject(' Thank you for visiting ' . $this->brand . ' at Maison & Objet!')
                                    ->view('emails.auto-reply.EH.usa.index');
                        break;

                    case 'GB':
                        return $this->from('info@essentialhome.eu')
                                    ->subject(' Thank you for visiting ' . $this->brand . ' at Maison & Objet!')
                                    ->view('emails.auto-reply.EH.uk.index');
                        break;

                    default: return $this->from('info@essentialhome.eu')
                                         ->subject(' Thank you for visiting ' . $this->brand . ' at Maison & Objet!')
                                         ->view('emails.auto-reply.EH.ww.index');
                }
                break;

            case 'Luxxu':
                return $this->subject(' Thank you for visiting ' . $this->brand . ' at Maison & Objet!')
                            ->view('emails.auto-reply.LU.en.index');
                break;

            case 'PULLCAST':
                return $this->subject(' Thank you for visiting ' . $this->brand . ' at Maison & Objet!')
                            ->view('emails.auto-reply.PC.en.index');
                break;

            case 'COVET House':
                switch ($this->country)
                {
                    case 'FR':
                        return $this->from('info@brabbu.com')
                            ->subject(' Je vous remercie de votre visite ' . $this->brand . ' à Maison & Objet!')
                            ->view('emails.auto-reply.CH.fr.index');
                        break;

                    case 'GB':
                        return $this->from('info@brabbu.com')
                            ->subject(' Thank you for visiting ' . $this->brand . ' at Maison & Objet!')
                            ->view('emails.auto-reply.CH.uk.index');
                        break;

                    default: return $this->from('info@brabbu.com')
                        ->subject(' Thank you for visiting ' . $this->brand . ' at Maison & Objet!')
                        ->view('emails.auto-reply.CH.ww.index');
                }
                    break;

            case 'Circu':
                switch ($this->country)
                {
                    case 'FR':
                        return $this->from('info@circu.net')
                            ->subject(' Je vous remercie de votre visite ' . $this->brand . ' à Maison & Objet!')
                            ->view('emails.auto-reply.CU.fr.index');
                        break;

                    default: return $this->from('info@circu.net')
                        ->subject(' Thank you for visiting ' . $this->brand . ' at Maison & Objet!')
                        ->view('emails.auto-reply.CU.en.index');
                }
                break;

            default: return true;
        }

    }
}
