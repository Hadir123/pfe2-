<?php

namespace App\Http\Controllers;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Controllers\AdresseController;
use App\User;
use App\Adresse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests\RegistrationFormRequest;
class APIController extends Controller
{
    /**
     * @var bool
     */
    public $loginAfterSignUp = true;
public $adresse=null ;
public $user=null ;
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */

public function login(Request $request)
    {
        $input = $request->only('email', 'password');
        $token = null;

        if (!$token = JWTAuth::attempt($input)) {
            return response()->json(['error' => 'Email or password invalid'], 401);
        }

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
        ]);
        /*$credentials = $request->only('email', 'password');

        if ($token =  Auth::guard()->attempt($credentials)) {
            return $this->respondWithToken($token);
        }

        return response()->json(['error' => 'Email or password invalid'], 401);
    }**/
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function logout(Request $request)
    {
        $this->validate($request, [
            'token' => 'required'
        ]);

        try {
            JWTAuth::invalidate($request->token);

            return response()->json([
                'success' => true,
                'message' => 'User logged out successfully'
            ]);
        } catch (JWTException $exception) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the user cannot be logged out'
            ], 500);
        }

    }

    /**
     * @param RegistrationFormRequest $request
     * @return \Illuminate\Http\JsonResponse
     */

public  function NewAdresse( $city,$street,$code,$adress)
{$hi=1;
    $res=DB::table('table_adresse')->where(['city'=>$city,'street'=>$street,'postal_code'=>$code,'adresse'=>$adress])->first();
if($res)
 {
return $res->id;
}
else
$adressee= new Adresse();
$adressee->city=$city;
$adressee->street=$street;
$adressee->postal_code=$code;
$adressee->adresse=$adress;

if($adressee->save())
return($adressee->id);
else
return response()->json([
   'success' => false,
   'message' => 'Sorry, task could not be added.'
], 500);

}
}
