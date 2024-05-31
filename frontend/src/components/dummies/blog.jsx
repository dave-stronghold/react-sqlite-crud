export default Blog = () => {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 ">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">
          Exploring the Beauty of Nature
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula
          dapibus velit, sit amet pharetra risus interdum ac. Phasellus feugiat
          est in erat aliquet, a suscipit lectus scelerisque.
        </p>
        <img
          src="https://picsum.photos/900/400"
          alt="Nature"
          className="w-full rounded-lg mb-6"
        />
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          The Majesty of Mountains
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
          ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
          vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
        </p>
        <img
          src="https://picsum.photos/800/500"
          alt="Mountains"
          className="w-full rounded-lg mb-6"
        />
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          Serenity of the Sea
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <img
          src="https://picsum.photos/800/400"
          alt="Sea"
          className="w-full rounded-lg mb-6"
        />
        <footer className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; 2024 Your Blog Name. All rights reserved.
          </p>
        </footer>
      </div>
    );
  };