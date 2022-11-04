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
        </style>
    </head>
    <body>
        <div class="mealcard-container">
            <table>
                <tr><td>            <div class="mealcard-pic">
                <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQB1CaDUrJR3_r7VuJUJlz14b_eUB2NVApNtmEALhJyU5sdnh6QHDUn1OO6Tnb7-ioF3zL5SE-Qai851bo" class="img-size"></img>
            </div></td></tr>
                <tr><td><div class="mealcard-title">Overnight oatz</div></td></tr>
                <tr><td><div class="mealcard-calories">8978 Calorie</div></td></tr>
            </table>

            
            
        </div>
    </body>
</html>