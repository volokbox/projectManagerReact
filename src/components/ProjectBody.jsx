export default function ProjectBody({title, date, text}){
    return(
        <section>
            <div class="p-8 lg:ml-64">   
                <article class="text-pretty...">
                    <title class="flex justify-between ">
                        <h1 class="md:text-4xl text-xl font-bold">{title}</h1>
                        <button class="md:text-xl text-md hover:text-red-500">Delete</button>
                    </title>
                    <h1 class="text-stone-500 py-2 font-semibold">{date}</h1>
                    <p class="py-3 text-xl">
                        {text}
                    </p>
                    <hr class="h-[1.5px] my-4 bg-gray-300"/>
                    <h1 class=" md:text-2xl text-xl font-bold py-3">Tasks</h1>
                    <label>
                        <input type="text" class="bg-gray-300 rounded px-2 py-1" />
                        <button class="px-2 hover:text-green-800">Add Task</button>
                    </label>
                </article>
            </div>  
        </section>
    );
}