<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DomainController extends Controller
{
    public function save(Request $request)
    {
        return json_encode($request);
    }
}
