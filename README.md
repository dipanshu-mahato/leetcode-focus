# **LeetCode Focus Extension**

A simple Chromium based extension that toggles individual UI filters on LeetCode using separate CSS files.

---

## **Requirements**

* Chromium based browser (eg. [Brave](https://github.com/brave/brave-browser))
* Manifest Version: **2** (google-chrome doesn't support manifestV2 anymore)
* Permissions needed:

  * `tabs`
  * `storage`
  * `https://leetcode.com/*`
  * `https://www.leetcode.com/*`

---

## **Setup**

1. Clone Repository

2. In your browser, go to:

   ```
   chrome://extensions/
   ```

3. Enable **Developer mode**.

4. Click **Load unpacked** and select the folder.

5. Open any LeetCode problem page.

6. Open the extension popup and toggle filters on/off.
   Each toggle injects or removes its corresponding CSS file.

---

Done.
