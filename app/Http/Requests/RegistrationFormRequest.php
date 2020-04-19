<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegistrationFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
          //  'password' => 'required|confirmed|string|min:6|max:10',
            'last_name'=>'required|max:60',
            'phone'=>'required|max:10',

            'gender'=>'required|max:10',
            'date_of_birth'=>'required|date',
'city'=>'required',
'adresse'=>'required',
'street'=>'required',
'postal_code'=>'required',




        ];
    }
}
