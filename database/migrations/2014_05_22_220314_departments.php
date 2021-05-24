<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Departments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('departments', function (Blueprint $table) {
            $table->id();
            $table->string('department_abbv');
            $table->string('department_name');
            $table->mediumText('department_addr')->nullable();
            $table->string('department_email')->nullable();
            $table->string('department_phone')->nullable();
            $table->string('department_fax')->nullable();
            $table->string('department_principal')->nullable();
        });

        DB::table('departments')->insert(
            array(
                [
                    'department_abbv' => 'ITD',
                    'department_name' => 'Information Technology Department',
                    'department_addr' => 'No address given',
                    'department_email' => 'itmanager@nisgaa.bc.ca',
                    'department_phone' => '+1-250-633-2937',
                    'department_fax' => '+1-250-633-2857',
                    'department_principal' => 'Andrew Nutma'
                ],
                [
                    'department_abbv' => 'SDO',
                    'department_name' => 'School District Office',
                    'department_addr' => 'PO Box 240, 4702 Huwilp Road, New Aiyansh, British Columbia, Canada V0J 1A0',
                    'department_email' => 'sdo@nisgaa.bc.ca',
                    'department_phone' => '+1-250-633-2228',
                    'department_fax' => '+1-250-633-2425',
                    'department_principal' => NULL 
                ],
                [
                    'department_abbv' => 'NESS',
                    'department_name' => 'Nisga\'a Elementary Secondary School',
                    'department_addr' => '5000 Skateen Avenue, PO Box 239, New Aiyansh, British Columbia, Canada V0J 1A0',
                    'department_email' => 'school_ness@nisgaa.bc.ca',
                    'department_phone' => '+1-250-633-2225',
                    'department_fax' => '+1-250-633-2669',
                    'department_principal' => 'Mark Koebel'
                ],
                [
                    'department_abbv' => 'AAMES',
                    'department_name' => 'Alvin A. McKay Elementary School',
                    'department_addr' => '311 Church St., PO Box 220, Laxgalts\'ap, British Columbia, Canada V0J 1X0',
                    'department_email' => 'school_aames@nisgaa.bc.ca',
                    'department_phone' => '+1-250-621-3277',
                    'department_fax' => '+1-250-621-3220',
                    'department_principal' => 'Martha Swinn'
                ],
                [
                    'department_abbv' => 'GES',
                    'department_name' => 'Gitwinksihlkw Elementary School',
                    'department_addr' => '3000 Lisims Avenue, PO Box 077, Gitwinksihlkw, British Columbia, Canada V0J 3T0',
                    'department_email' => 'school_ges@nisgaa.bc.ca',
                    'department_phone' => '+1-250-633-2688',
                    'department_fax' => '+1-250-633-2916',
                    'department_principal' => 'Tanya Azak'
                ],
                [
                    'department_abbv' => 'NBES',
                    'department_name' => 'Nathan Barton Elementary School',
                    'department_addr' => '1310 Volunteer St., Gingolx, British Columbia, Canada V0V 1B0',
                    'department_email' => 'school_nbes@nisgaa.bc.ca',
                    'department_phone' => '+1-250-326-4206',
                    'department_fax' => '+1-250-326-4252',
                    'department_principal' => 'Lavita Robinson'
                ],
                [
                    'department_abbv' => 'TMD',
                    'department_name' => 'Transportation and Maintenance Department',
                    'department_addr' => 'No address given',
                    'department_email' => 'mpercival@nisgaa.bc.ca',
                    'department_phone' => '+1-250-633-2030',
                    'department_fax' => '+1-250-633-2333',
                    'department_principal' => NULL
                ],
                [
                    'department_abbv' => 'SD92',
                    'department_name' => 'School District No. 92',
                    'department_addr' => 'PO Box 240, 4702 Huwilp Road, New Aiyansh, British Columbia, Canada V0J 1A0',
                    'department_email' => 'sd92@nisgaa.bc.ca',
                    'department_phone' => '+1-250-633-2228',
                    'department_fax' => '+1-250-633-2425',
                    'department_principal' => 'Jill Jensen'
                ],
                [
                    'department_abbv' => 'FD',
                    'department_name' => 'Finance Department',
                    'department_addr' => 'No address given',
                    'department_email' => 'finance@nisgaa.bc.ca',
                    'department_phone' => '+1-250-633-2228 ext. 1105',
                    'department_fax' => '+1-250-633-2425',
                    'department_principal' => 'Kory Tanner'
                ],
                [
                    'department_abbv' => 'SSD',
                    'department_name' => 'School District Superintendent',
                    'department_addr' => 'No address given',
                    'department_email' => NULL,
                    'department_phone' => NULL,
                    'department_fax' => NULL,
                    'department_principal' => 'Jill Jensen'
                ],
                [
                    'department_abbv' => 'GCC',
                    'department_name' => 'Gitginsaa Childcare Centre',
                    'department_addr' => NULL,
                    'department_email' => 'gcc@nisgaa.bc.ca',
                    'department_phone' => '+1 (778) 961 0091',
                    'department_fax' => NULL,
                    'department_principal' => 'Nomculelo Nyathi'
                ],
                [
                    'department_abbv' => 'SS',
                    'department_name' => 'Strong Start',
                    'department_addr' => NULL,
                    'department_email' => NULL,
                    'department_phone' => NULL,
                    'department_fax' => NULL,
                    'department_principal' => 'Nomculelo Nyathi' 
                ],
                [
                    'department_abbv' => 'NLC',
                    'department_name' => 'Nisga\'a Language and Culture',
                    'department_addr' => NULL,
                    'department_email' => NULL,
                    'department_phone' => NULL,
                    'department_fax' => NULL,
                    'department_principal' => 'Peter McKay' 
                ]
            )
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('departments');
    }
}
