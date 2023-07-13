<?php

namespace App\Console\Commands;

use App\Models\Logger;
use Illuminate\Console\Command;

class TestLoggerTransaction extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tl:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $loggerRecord = new Logger();
        $loggerRecord->log_category = '0';
        $loggerRecord->log_level = '0';
        $loggerRecord->log_instance = 'test';
        $loggerRecord->log_data = 'test';
        $loggerRecord->save();
        return Command::SUCCESS;
    }
}
