const allCategories = [
  "age",
  "alone",
  "amazing",
  "anger",
  "architecture",
  "art",
  "attitude",
  "beauty",
  "best",
  "birthday",
  "business",
  "car",
  "change",
  "communication",
  "computers",
  "cool",
  "courage",
  "dad",
  "dating",
  "death",
  "design",
  "dreams",
  "education",
  "environmental",
  "equality",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fear",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "god",
  "good",
  "government",
  "graduation",
  "great",
  "happiness",
  "health",
  "history",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  "love",
  "marriage",
  "medical",
  "men",
  "mom",
  "money",
  "morning",
  "movies",
  "success",
];
interface AllCategoryProps {
  setCategory: (category: string) => void;
  category: string;
}
export default function AllCategory({
  category,
  setCategory,
}: AllCategoryProps) {
  return (
    <select
      className="mx-2 border-[1px] border-blue-500 rounded bg-neutral-900 text-neutral-300"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      {allCategories.map((category) => (
        <option value={category}>{category}</option>
      ))}
    </select>
  );
}
