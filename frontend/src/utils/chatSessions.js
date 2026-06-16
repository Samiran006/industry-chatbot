export function createSession() {

  const session = {
    id: Date.now(),
    title: "New Chat",
    messages: [],
  };

  const sessions =
    JSON.parse(
      localStorage.getItem(
        "chat_sessions"
      ) || "[]"
    );

  sessions.unshift(session);

  localStorage.setItem(
    "chat_sessions",
    JSON.stringify(sessions)
  );

  localStorage.setItem(
    "active_session",
    session.id
  );

  return session;
}

export function getSessions() {

  return JSON.parse(
    localStorage.getItem(
      "chat_sessions"
    ) || "[]"
  );
}

export function getActiveSession() {

  return localStorage.getItem(
    "active_session"
  );
}