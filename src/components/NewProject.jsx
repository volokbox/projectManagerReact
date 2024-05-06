export default function NewProject(){
    return(
        <section class="p-4">
            <div class="p-8 lg:ml-64">   
                <article class="flex-col flex">
                    <p class="text-xl py-2">Title</p>
                    <label>
                        <input type="text" class="bg-gray-300 rounded px-2 py-1" />
                    </label>

                    <p class="text-xl py-2">Description</p>
                    <label>
                        <input type="text" class="bg-gray-300 rounded px-2 py-1" />
                    </label>

                    <p class="text-xl py-2">Due Date</p>
                    <label>
                        <input type="text" class="bg-gray-300 rounded px-2 py-1" />
                    </label>
                </article>
            </div>
        </section>
    );
}