# from flask import Flask, request, jsonify
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# # Chatbot API
# @app.route("/chat", methods=["POST"])
# def chat():
#     data = request.get_json()

#     user_message = data.get("message", "")

#     # simple chatbot logic
#     user_message = user_message.lower()

#     if "hello" in user_message:
#         reply = "Hello! How can I help you today?"

#     elif "how are you" in user_message:
#         reply = "I'm fine! How can I assist you?"

#     elif "your name" in user_message:
#         reply = "I'm a React + Flask chatbot."

#     elif "bye" in user_message:
#         reply = "Goodbye! Have a nice day."

#     else:
#         reply = "Sorry, I didn't understand. Please try something else."

#     return jsonify({
#         "reply": reply
#     })


# if __name__ == "__main__":
#     app.run(debug=True, port=5000)
