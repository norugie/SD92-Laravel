<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\View;
use Illuminate\Http\Request;

class AuthADUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (!session('userName') && !session('userEmail'))
        {
            return redirect ('/error');
        } else 
        {
            $viewData = [];
    
            // Check for flash errors
            if (session('error')) {
                $viewData['error'] = session('error');
                $viewData['errorDetail'] = session('errorDetail');
            }
        
            // Check for logged on user
            if (session('userName') && session('userEmail'))
            {
                $viewData['userName'] = session('userName');
                $viewData['userEmail'] = session('userEmail');
                $viewData['userID'] = session('userID');
                $viewData['userDepartment'] = session('userDepartment');
                $viewData['schoolToPost'] = session('schoolToPost');
            }

            $page = explode('/', $request->path());
            $viewData['pageSection'] = $page[1];
            if(isset($page[2])){
                switch ($page[2]) {
                    case 'posts': 
                        $page[2] = 'district posts';
                        break;
                    case 'files': 
                        $page[2] = 'district files';
                        break;
                    case 'package': 
                        $page[2] = 'board meeting packages';
                        break;
                    case 'minutes': 
                        $page[2] = 'board meeting minutes';
                        break;
                    case 'policies': 
                        $page[2] = 'board of education: policies';
                        break;
                    case 'directives': 
                        $page[2] = 'board of education: process and directives';
                        break;
                    case 'plans': 
                        $page[2] = 'district strategic plans';
                        break;
                    case 'ss': 
                        $page[2] = 'strong start';
                        break;
                }

                $viewData['pageSubSection'] = $page[2];
            }

            $data = json_decode(json_encode($viewData), FALSE);

            View::share('data', $data);
        }

        return $next($request);
    }
}
