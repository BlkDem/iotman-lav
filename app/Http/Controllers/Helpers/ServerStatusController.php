<?php

namespace App\Http\Controllers\Helpers;

// use App\Http\Controllers\Controller;
// use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;
// use App\Exceptions\Sh

class ServerStatusController extends BaseController
{
    public static function shellCmd($cmd)
    {
        {
            $process = Process::fromShellCommandline($cmd);

            $processOutput = '';

            $captureOutput = function ($type, $line) use (&$processOutput) {
                $processOutput .= $line;
            };

            $process->setTimeout(null)
                ->run($captureOutput);

            // dd($captureOutput);

            if ($process->getExitCode()) {
                // $exception = new ShellCommandFailedException($cmd . " - " . $processOutput);
                // report($exception);
                return "error";
                // throw $exception;
            }

            return $processOutput;
        }
    }

    public function getServerLoad($cmd){
        return self::shellCmd($cmd);
    }
}
