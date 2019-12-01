<?php

use Illuminate\Database\Seeder;

use App\State;
use App\LocalGovernment;

class LocationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $file = public_path('assets/states.csv');
        $statesArr = $this->csvToArray($file);
        
        for ($i = 0; $i < count($statesArr); $i ++) {
            State::firstOrCreate($statesArr[$i]);
        }

        $file = public_path('assets/local_governments.csv');
        $lgArr = $this->csvToArray($file);

        for ($i = 0; $i < count($lgArr); $i ++) {
            LocalGovernment::firstOrCreate($lgArr[$i]);
        }
    }

    function csvToArray($filename = '', $delimiter = ',') {
        if (!file_exists($filename) || !is_readable($filename))
            return false;
        $header = null;
        $data = array();
        if (($handle = fopen($filename, 'r')) !== false)
        {
            while (($row = fgetcsv($handle, 1000, $delimiter)) !== false)
            {
                if (!$header)
                    $header = $row;
                else
                    $data[] = array_combine($header, $row);
            }
            fclose($handle);
        }
        return $data;
    }
}
