{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # TypeScript Project: 3-Way Sorted Merge (O(N) Complexity)\
\
## 1. Source Code (`src/merge.ts`)\
```typescript\
/**\
 * Merges three pre-sorted collections into a single ascending sorted array without using built-in sort functions.\
 * @param collection_1 Sorted ascending (min to max)\
 * @param collection_2 Sorted ascending (min to max)\
 * @param collection_3 Sorted descending (max to min)\
 */\
export function merge(\
  collection_1: number[],\
  collection_2: number[],\
  collection_3: number[]\
): number[] \{\
  const result: number[] = [];\
  \
  let p1 = 0;\
  let p2 = 0;\
  // Read collection_3 from right to left (backwards) to process it in ascending order\
  let p3 = collection_3.length - 1;\
\
  const len1 = collection_1.length;\
  const len2 = collection_2.length;\
\
  while (p1 < len1 || p2 < len2 || p3 >= 0) \{\
    let val1 = p1 < len1 ? collection_1[p1] : Infinity;\
    let val2 = p2 < len2 ? collection_2[p2] : Infinity;\
    let val3 = p3 >= 0 ? collection_3[p3] : Infinity;\
\
    // Find the smallest value among the three active pointers\
    if (val1 <= val2 && val1 <= val3) \{\
      result.push(val1);\
      p1++;\
    \} else if (val2 <= val1 && val2 <= val3) \{\
      result.push(val2);\
      p2++;\
    \} else \{\
      result.push(val3);\
      p3--;\
    \}\
  \}\
\
  return result;\
\}\
```\
\
## 2. Unit Tests (`tests/merge.test.ts`)\
```typescript\
import \{ merge \} from "../src/merge";\
\
describe("merge function tests", () => \{\
  test("should merge normal matching arrays into an ascending ordered list", () => \{\
    const col1 =;\
    const col2 =;\
    const col3 =; // descending order\
    \
    expect(merge(col1, col2, col3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);\
  \});\
\
  test("should handle collections containing empty arrays", () => \{\
    expect(merge([], [1, 2], [5, 4])).toEqual([1, 2, 4, 5]);\
    expect(merge([1, 3], [], [])).toEqual([1, 3]);\
    expect(merge([], [], [])).toEqual([]);\
  \});\
\
  test("should handle duplicate elements across collections", () => \{\
    const col1 =;\
    const col2 =;\
    const col3 =;\
    \
    expect(merge(col1, col2, col3)).toEqual([1, 1, 2, 2, 2, 2, 3, 4]);\
  \});\
\
  test("should correctly sort negative numbers", () => \{\
    const col1 = [-10, -5, 0];\
    const col2 = [-8, -2, 4];\
    const col3 = [5, 1, -3];\
    \
    expect(merge(col1, col2, col3)).toEqual([-10, -8, -5, -3, -2, 0, 1, 4, 5]);\
  \});\
\});\
```\
\
## 3. Configuration Files\
\
### `package.json`\
```json\
\{\
  "name": "typescript-merge-project",\
  "version": "1.0.0",\
  "scripts": \{\
    "build": "tsc",\
    "test": "jest"\
  \},\
  "devDependencies": \{\
    "@types/jest": "^29.5.12",\
    "jest": "^29.7.0",\
    "ts-jest": "^29.1.2",\
    "typescript": "^5.4.5"\
  \}\
\}\
```\
\
### `tsconfig.json`\
```json\
\{\
  "compilerOptions": \{\
    "target": "ES2022",\
    "module": "CommonJS",\
    "outDir": "./dist",\
    "rootDir": "./",\
    "strict": true,\
    "esModuleInterop": true,\
    "skipLibCheck": true,\
    "forceConsistentCasingInFileNames": true\
  \},\
  "include": ["src/**/*", "tests/**/*"]\
\}\
```\
\
### `jest.config.js`\
```javascript\
module.exports = \{\
  preset: 'ts-jest',\
  testEnvironment: 'node',\
  testMatch: ['**/tests/**/*.test.ts']\
\};\
```\
\
---\
\
## 4. Setup and Execution Guide\
\
Follow these steps in your terminal to set up the project locally:\
\
1. **Create the Project Layout:**\
   ```bash\
   mkdir typescript-merge-project && cd typescript-merge-project\
   mkdir src tests\
   ```\
   Save the respective file contents above into files named `src/merge.ts`, `tests/merge.test.ts`, `package.json`, `tsconfig.json`, and `jest.config.js`.\
\
2. **Install Dependencies:**\
   ```bash\
   npm install\
   ```\
\
3. **Run the Unit Tests:**\
   ```bash\
   npm test\
   ```\
\
4. **Compile TypeScript to JavaScript (Optional):**\
   ```bash\
   npm run build\
   ```\
}