# Chrome Extension project using react, redux and react-chrome-redux

## Getting Started

Clone repository

```bash
$ git clone https://github.com/ihenvyr/react-chrome-extension.git
$ cd react-chrome-extension
```

Install dependencies, and run dev script (to build the chrome extension files)

```bash
$ npm install
$ npm run dev
```

Load the extension to Chrome Browser

1. Open **chrome://extensions/** page
2. Check **Developer Mode**
3. Load unpacked extension...
4. Browse **react-chrome-extension/build** directory

## Currently there's a problem implementing the async redux action

Steps to Reproduce

1. In chrome, open a new tab, it should insert an element like this <img src="http://i.imgur.com/DInfQzL.png" />
2. Click **add count (async)** doesn't update the background store/state
3. Open **chrome://extensions/** page and look for **React Chrome Extension** and under Inspect views, open the **background page** to see the logs from alias action
