'use client';

import { appWindow } from '@tauri-apps/api/window';

const TitleBar = () => {
  const handleMinimize = () => appWindow.minimize();
  const handleMaximize = () => appWindow.maximize();
  const handleClose = () => appWindow.close();
  return (
    <section
      className="flex z-50 justify-start items-center p-2 bg-transparent select-none absolute top-0 left-0 right-0"
      data-tauri-drag-region
    >
      <div className="space-x-2">
        <button
          onClick={handleClose}
          className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
        />
        <button
          onClick={handleMinimize}
          className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
        />
        <button
          onClick={handleMaximize}
          className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        />
      </div>
    </section>
  );
};

export default TitleBar;
