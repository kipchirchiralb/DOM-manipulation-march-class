### 📝 Assignment: Build a Simple Notes App (DOM Manipulation)

#### 🎯 Objective

Create a simple **Notes App** using **vanilla JavaScript**, focusing entirely on **DOM manipulation and dynamic UI updates**. The app will allow users to **add**, **view**, and **delete notes**. Notes will be stored in memory using a **JavaScript array of objects**

---

#### 📋 Requirements

1. **Data Structure**

   - Store notes in a JavaScript array.
   - Each note must be an object with:

     - `text`: string – the content of the note
     - `datetime`: string – timestamp when the note was added
     - `category`: string – a simple label like `"work"`, `"personal"`, etc.

   ```js
   const notes = [
     {
       text: "Buy groceries",
       datetime: "2025-05-29 15:32",
       category: "personal"
     },
     ...
   ];
   ```

2. **Features**

   - **Add Note**

     - Input fields:

       - Textarea for note text
       - Dropdown or input for category

     - Automatically add current date and time
     - When added, the note should appear in the list below

   - **Delete Note**

     - Each note should have a delete button (e.g., ❌ or "Delete")
     - Clicking it should remove the note from the array and update the display

   - **Display Notes**

     - On page load, all current notes in the array should be shown
     - Show note text, category, and datetime

3. **UI Layout**

   - Basic and clean layout
   - Use only **HTML**, **CSS**, and **JavaScript**
   - Example structure:

     ```html
     <textarea></textarea>
     <select>
       category options
     </select>
     <button>Add Note</button>
     <div class="notes-list"></div>
     ```

---

#### ✅ What You'll Be Graded On

- Use of proper DOM manipulation methods
- Dynamic rendering of notes
- Clean, readable code
- Handling user input and updating the UI in real time
- Clear structure and styling (doesn’t need to be fancy, but should be organized)
