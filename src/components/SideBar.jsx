export default function SideBar(){
    return(
    <section id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-5 py-6 overflow-y-auto bg-gray-50 dark:bg-black">
            <ul class="space-y-2 font-medium">
                <li>
                    <h2 class="flex items-center p-2 text-xl text-gray-1000 rounded-lg dark:text-white">
                        <h2>Your Projects</h2>
                    </h2>
                </li>
                <li>
                    <button class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white dark:hover:bg-violet-600 group">
                        + Add Project 
                    </button>
                </li>
            </ul>
        </div>
    </section>
    );
}