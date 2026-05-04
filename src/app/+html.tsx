<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Labirin GACORv3</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            background: #0f3460; 
            font-family: Arial, sans-serif; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            padding: 20px;
            touch-action: manipulation;
        }
        h1 { color: #e94560; margin-bottom: 10px; font-size: 28px; }
        #steps { color: #fff; font-size: 18px; margin-bottom: 20px; }
        #maze { 
            display: grid; 
            border: 3px solid #e94560; 
            background: #1a1a2
