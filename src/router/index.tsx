import { createBrowserRouter, Navigate } from "react-router";

import { NewChatPage } from "../pages/NewChatPage";
import { ChatPage } from "../pages/ChatPage";

import { PATHS } from "../constants/paths";

export const routes = createBrowserRouter([
  {
    path: PATHS.route.newChat,
    element: <NewChatPage />,
  },
  {
    path: `${PATHS.route.chat}/:chatId`,
    element: <ChatPage />,
  },
  {
    path: "*",
    element: <Navigate to={PATHS.route.newChat} replace />,
  },
]);
