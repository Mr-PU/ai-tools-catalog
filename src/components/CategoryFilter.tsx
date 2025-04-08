import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-white mb-4 md:mb-4">Categories</h2>

      {/* Mobile View: Horizontal Scrollable List */}
      <div className="flex overflow-x-auto gap-2 pb-2 md:hidden scrollbar-hide">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onCategoryChange(null)}
          className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium ${
            selectedCategory === null
              ? 'bg-white text-[#008080]'
              : 'text-white bg-white/10 hover:bg-white/20'
          }`}
        >
          All Categories
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onCategoryChange(category)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium ${
              selectedCategory === category
                ? 'bg-white text-[#008080]'
                : 'text-white bg-white/10 hover:bg-white/20'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Desktop View: Vertical List */}
      <div className="hidden md:block space-y-2">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onCategoryChange(null)}
          className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
            selectedCategory === null
              ? 'bg-white text-[#008080]'
              : 'text-white hover:bg-white/20'
          }`}
        >
          All Categories
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onCategoryChange(category)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
              selectedCategory === category
                ? 'bg-white text-[#008080]'
                : 'text-white hover:bg-white/20'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;