<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index ()
    {
        $viewData = $this->loadViewData();
        return view ( 'cms.dashboard.dashboard', $viewData );
    }
}
