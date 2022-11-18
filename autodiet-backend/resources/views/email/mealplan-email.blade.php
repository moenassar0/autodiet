<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <title>Email</title>
        <style>
            .mealcard-container{
                display: flex;
                flex-direction: column;  
                margin-right: 0.5rem; 
                margin-bottom: 0.5rem; 
                transition-timing-function: linear; 
                
                height: 12rem;
                width: 20rem; 
                border-top-left-radius: 0.25rem;
                border-top-right-radius: 0.25rem; 
                cursor: pointer; 
            }

            .mealcard-container:hover {
            --transform-scale-x: 1.05;
            --transform-scale-y: 1.05; 
            opacity: 0.7; 
            }

            .mealcard-pic{
                width: 100%; 
            height: 66.666667%; 
            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem; 

            }

            .mealcard-title{
                padding-top: 0.25rem;
            padding-bottom: 0.25rem; 
            padding-left: 0.25rem;
            padding-right: 0.25rem; 
            background-color: #ffffff; 
            color: #000000; 
            width: 100%; 
            height: 16.666667%; 

            }

            .img-size{
                width: 100%; 
            height: 100%; 
            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem; 
            }

            .mealcard-calories{
                padding-top: 0.25rem;
            padding-bottom: 0.25rem; 
            padding-left: 0.25rem;
            padding-right: 0.25rem; 
            background-color: #000000; 
            color: #ffffff; 
            font-size: 0.75rem;
            line-height: 1rem; 
            width: 100%; 
            height: 16.666667%; 
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem; 
            }

        .main-table{
            border-collapse: collapse;
            margin: 0 0 25px 0;
            font-size: 1em;
            min-width: 400px;
            width: 100%;
            max-height: 400px;
            border-radius: 10px;
        }

        .main-table th{
            background-color: #FF5B8D;
            text-align: left;
            font-weight: bold;
            position: sticky;
            top:0;
            left:0;
        }

        .main-table th,
        .main-table td {
            padding: 12px 15px;
        }
            
        </style>
    </head>
    <body>

    @foreach ($meals as $meal)
        <table class="main-table">
            <tr>
                <th>Meal Name: {{ $meal->title }}</th>
                <th>Calories</th>
                <th>Protein</th>
                <th>Carbohydrate</th>
                <th>Serving</th>
            </tr>
            
            @foreach ($meal->recipe as $recipe)
            <tr>
                <td><div class="mealcard-title">{{ $recipe->title }}</div></td>
                <td><div class="mealcard-title">{{ $recipe->calories * $meal->multiplier * $recipe->multiplier }}</div></td>
                <td><div class="mealcard-title">{{ $recipe->protein * $meal->multiplier * $recipe->multiplier  }}</div></td>
                <td><div class="mealcard-title">{{ $recipe->carbohydrate * $meal->multiplier * $recipe->multiplier  }}</div></td>
                <td><div class="mealcard-title">{{ $recipe->serving_size * $meal->multiplier * $recipe->multiplier . " " . $recipe->serving_type}}</div></td>
            </tr>
            @endforeach
            
        </table>
        @endforeach
    </body>
</html>