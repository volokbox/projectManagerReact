import { useState } from "react";

export default function AddProject(){
    const[ isClicked, setIsClicked ] = useState(false);

    function clickHandler(){
        setIsClicked(true);
    }

    return(
        <section class="p-4">
            <div class="p-8 lg:ml-64">   
                <article class="flex-col flex justify-center items-center">
                <img class="h-32 w-18 object-contain" src="src\assets\no-projects.png"  alt="asd"/>
                    <h2 class="mt-5 text-stone-700 font-bold text-2xl">No project yet</h2>
                    <p class="mt-2 text-stone-500 md:text-base text-center text-sm">
                        Select a project or get started with a new one
                    </p>
                    <button class="mt-8  md:px-3 py-2 md:text-base px-2 rounded-md text-sm text-stone-300 bg-stone-700  hover:bg-stone-800 hover:text-stone-50"
                    onClick={clickHandler}>
                        Create new project
                    </button>
                </article>
            </div>
        </section>
    );
}