<?php

namespace App\Http\Controllers;

use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserDetail;
use Validator;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $user = new User;
 
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->user_role = $request->user_role;

        $user->save();
 
        return response()->json(["result" => "ok", 'user added:' => $user], 201);
    }

    public function getUserDetail($id){
        $user = User::find($id);
        if(!$user) return response()->json(["message" => "User not found"], 400);
        return response()->json(["user_detail" => $user->detail], 200);
    }

    public function updateUserDetail(Request $request){
        $user = User::find($request->user_id);
        if(!$user) return response()->json(["message" => "User not found"], 400);

        //Find user's detail or create new one in DB
        if($user->detail == NULL) $detail = new UserDetail;
        else $detail = $user->detail;
        
        /*$detail->goal = $request->goal;
        $detail->sex = $request->sex;
        $detail->activity_level = $request->activity_level;
        $detail->bodyfat_percentage = $request->bodyfat_percentage;
        $detail->height = $request->height;
        $detail->weight = $request->weight;
        $detail->age = $request->age;*/

        $validator = Validator::make($request->all(),[
            'user_id' => 'required',
            'goal' => 'required',
            'sex' => 'required',
            'activity_level' => 'required',
            'bodyfat_percentage' => 'required',
            'height' => 'required',
            'weight' => 'required',
            'age' => 'required',
        ]);

        if($validator->fails()) return response()->json($validator->errors()->toJson(), 400);

        $detail->fill($validator->validated());
        $detail->save();    
        return response()->json(['user detail added:' => $user->detail], 201);
    }
}
