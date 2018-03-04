<?php

namespace App\Services;

use App\Mail\ErrorAPI;
Use Mail;

class SalesForceAPI
{

    protected $config;
    protected $sf_token;

    /**
     * Constructor with config file from services
     *
     * @param [type] $config
     */
    public function __construct($config)
    {
     $this->config=$config;
     $this->sf_token=$this->doLogin();
    }

    /**
     * Gets the token from Salesforce to allow query
     * @return Json
     */
    private function doLogin()
    {

        $curl_post_param  = 'grant_type='.     $this->config['grant_type'];
        $curl_post_param .= '&client_id='.     $this->config['client_id'];
        $curl_post_param .= '&client_secret='. $this->config['client_secret'];
        $curl_post_param .= '&username='.      $this->config['username'];
        $curl_post_param .= '&password='.      $this->config['password'];

        $curl_getToken = curl_init();

        curl_setopt_array($curl_getToken, array(
           CURLOPT_URL            => $this->config['url'],
           CURLOPT_RETURNTRANSFER => true,
           CURLOPT_ENCODING       => "",
           CURLOPT_MAXREDIRS      => 10,
           CURLOPT_TIMEOUT        => 30,
           CURLOPT_SSL_VERIFYPEER => false,
           CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
           CURLOPT_CUSTOMREQUEST  => "POST",
           CURLOPT_POSTFIELDS     => $curl_post_param,
           CURLOPT_HTTPHEADER     => array("content-type: application/x-www-form-urlencoded"),
       ));

       $response = curl_exec($curl_getToken);
       $err      = curl_error($curl_getToken);

       curl_close($curl_getToken);

       if ($err)
        {
            return "cURL Error #:" . $err;
            die();
        }
        $response = json_decode($response,true);

        if (isset($response['error']))
        {
            $content =
            [
                'title'             => "Salesforce Error Report",
                'error_description' => json_encode($response),
            ];

            Mail::to(config('mail.admin'))->send(new ErrorAPI($content));
       }

      return $response;
    }

    /**
     * Allows to do querys the Salesforce Database (SOQL)
     * @param String $soql_query
     * @return Json
     */

    public function Query(String $soql_query)
    {

        $curl_url = $this->sf_token['instance_url'] . $this->config['srv_url']. 'query?q=' .urlencode($soql_query);

        $curl_getSoql = curl_init();
        curl_setopt_array($curl_getSoql, array(
            CURLOPT_URL            => $curl_url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING       => "",
            CURLOPT_MAXREDIRS      => 10,
            CURLOPT_TIMEOUT        => 30,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST  => "GET",
            CURLOPT_HTTPHEADER     => array('Authorization: '. $this->sf_token['token_type'] .' '. $this->sf_token['access_token']),
            ));

        $response = curl_exec($curl_getSoql);
        $err      = curl_error($curl_getSoql);

        curl_close($curl_getSoql);

        if ($err)
        {
            return "cURL Error #:" . $err;
            die();
        }

        $response = json_decode($response,true);

        if (isset($response['error']))
        {
            $content =
            [
                'title'            => 'Salesforce Query Error',
                'error_description' => json_encode($response),
            ];

            Mail::to(config('mail.admin'))->send(new ErrorAPI($content));
        }

       return $response;
    }

    /**
     * Inserts a new Object, with the given values as parameters.
     *
     * @param String $object
     * @param String $jsonContent
     * @return void
     */
    public function Insert(String $object, String $jsonContent)
    {

        $curl_url = $this->sf_token['instance_url'] . $this->config['srv_url']. 'sobjects/'.$object.'/';

        $curl_getSoql = curl_init();
        curl_setopt_array($curl_getSoql, array(
            CURLOPT_URL            => $curl_url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING       => "",
            CURLOPT_MAXREDIRS      => 10,
            CURLOPT_TIMEOUT        => 30,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
            CURLOPT_POST           => true,
            CURLOPT_HTTPHEADER     => array('Authorization: '. $this->sf_token['token_type'] .' '. $this->sf_token['access_token'],"Content-type: application/json"),
            CURLOPT_POSTFIELDS     => $jsonContent,
            ));

        $response = curl_exec($curl_getSoql);
        $err      = curl_error($curl_getSoql);

        curl_close($curl_getSoql);

        if ($err)
        {
            return "cURL Error #:" . $err;
            die();
        }
        $response = json_decode($response,true);
        if (!isset($response['success']))
        {
            $content =
            [
                'title'            => "Salesforce Insert Error",
                'error_description' => json_encode($response),
            ];
            //Mail::to(config('mail.admin'))->send(new ErrorAPI($content));
        }

       return $response;
      }

      /**
       * Updates the Object in Salesforce
       *
       * @param String $object
       * @param Integer $id
       * @param String $jsonContent
       * @return void
       */
    public function Update(String $object, String $id, String $jsonContent)
    {

        $curl_url = $this->sf_token['instance_url'] . $this->config['srv_url']. 'sobjects/'.$object.'/'.$id;

        $curl_getSoql = curl_init();
        curl_setopt_array($curl_getSoql, array(
            CURLOPT_URL            => $curl_url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING       => "",
            CURLOPT_MAXREDIRS      => 10,
            CURLOPT_TIMEOUT        => 30,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST  => "PATCH",
            CURLOPT_HTTPHEADER     => array('Authorization: '. $this->sf_token['token_type'] .' '. $this->sf_token['access_token'],"Content-type: application/json"),
            CURLOPT_POSTFIELDS     => $jsonContent,
            ));

        $response = curl_exec($curl_getSoql);
        $err      = curl_error($curl_getSoql);

        curl_close($curl_getSoql);

        if ($err)
        {
            return "cURL Error #:" . $err;
            die();
        }

        $response = json_decode($response,true);

        if (!isset($response['success']))
        {
             $content =
             [
                'title'            => "Salesforce Update Error",
                'error_description' => json_encode($response),
             ];
            Mail::to(config('mail.admin'))->send(new ErrorAPI($content));
       }
      return $response;

    }

    public function DescribeObject(String $object)
    {

        $curl_url = $this->sf_token['instance_url'] . $this->config['srv_url']. 'sobjects/'.$object.'/describe';

        $curl_getSoql = curl_init();
        curl_setopt_array($curl_getSoql, array(
            CURLOPT_URL            => $curl_url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING       => "",
            CURLOPT_MAXREDIRS      => 10,
            CURLOPT_TIMEOUT        => 30,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST  => "GET",
            CURLOPT_HTTPHEADER     => array('Authorization: '. $this->sf_token['token_type'] .' '. $this->sf_token['access_token'],"Content-type: application/json"),
            ));

        $response = curl_exec($curl_getSoql);
        $err      = curl_error($curl_getSoql);

        curl_close($curl_getSoql);

        if ($err)
        {
            return "cURL Error #:" . $err;
            die();
        }

        $response = json_decode($response,true);

       if (!isset($response['name']))
       {
            $content =
            [
                'title'            => "Salesforce Object Error",
                'error_description' => json_encode($response),
            ];
            Mail::to(config('mail.admin'))->send(new ErrorAPI($content));
       }

      return $response;
    }

}