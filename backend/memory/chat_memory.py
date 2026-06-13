from collections import deque

chat_history = deque(maxlen=10)


def add_message(role, content):

    chat_history.append({
        "role": role,
        "content": content
    })


def get_history():

    return list(chat_history)


def clear_history():

    chat_history.clear()