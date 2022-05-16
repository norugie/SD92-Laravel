<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Log;
use Carbon\Carbon;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * Handle process for logging activity
     *
     * @param String $user
     * @param String $description
     */
    public function inputLog(Int $user, Int $department, String $description)
    {
        $log = new Log();
        $log->log_slug = 'LOG' . rand(1111111111,9999999999);
        $log->log_desc = $description;
        $log->user_id = $user;
        $log->department_id = $department;
        $log->save();
    }

    /**
     * Return data for /dashboard page
     * 
     */
    public function requestLog ()
    {
        $log = new Log();

        $startDate = Carbon::now()->subDays(30);
        $endDate = Carbon::now();

        // Displayed logs only show logs from the last 30 days
        return $log->whereBetween("created_at", [$startDate, $endDate])
                ->orderBy('created_at', 'DESC')
                ->get();
    }
}
