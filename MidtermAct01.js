import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function MidtermAct01() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hi mahal koooo!  ", sender: "other" },
    { id: "2", text: "Hello lovee, how are you?", sender: "me" },
    { id: "3", text: "I'm fine bebe, imissyouu", sender: "other" },
  ]);
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const [commentInput, setCommentInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "me",
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Auto reply
    setTimeout(() => {
      const botReply = {
        id: (Date.now() + 1).toString(),
        text: "iloveyouuuu",
        sender: "other",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  const addComment = () => {
    if (commentInput.trim() === "") return;

    const newComment = {
      id: Date.now().toString(),
      text: commentInput,
    };
    setComments((prev) => [...prev, newComment]);
    setCommentInput("");
  };

  const renderMessage = ({ item }) => (
    <View
      style={{
        alignSelf: item.sender === "me" ? "flex-end" : "flex-start",
        backgroundColor: item.sender === "me" ? "#0084ff" : "#e5e5ea",
        borderRadius: 20,
        margin: 5,
        padding: 10,
        maxWidth: "70%",
      }}
    >
      <Text style={{ color: item.sender === "me" ? "#fff" : "#000" }}>
        {item.text}
      </Text>
    </View>
  );

  const renderComment = ({ item }) => (
    <View
      style={{
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        padding: 10,
        marginVertical: 4,
      }}
    >
      <Text style={{ color: "#333" }}> {item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      {/* CHAT BOX */}
      
      <Text style={{ fontSize: 30, fontWeight: "bold", margin: 10  }}>
        Chat Box
      </Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={{ padding: 10 }}
      />

      {/* Chat Input */}
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          borderTopWidth: 1,
          borderColor: "#ccc",
          backgroundColor: "#fff",
        }}
      >
        <TextInput
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 20,
            paddingHorizontal: 15,
            marginRight: 10,
          }}
          placeholder="Type a message..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity
          onPress={sendMessage}
          style={{
            backgroundColor: "#0084ff",
            borderRadius: 20,
            paddingVertical: 10,
            paddingHorizontal: 20,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize:  30,}}>Send</Text>
        </TouchableOpacity>
      </View>

      {/* COMMENT SECTION */}
      <Text style={{ fontSize: 30, fontWeight: "bold", margin: 10 }}>
        Comments
      </Text>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={renderComment}
        contentContainerStyle={{ padding: 10 }}
      />

      {/* Comment Input */}
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          borderTopWidth: 1,
          borderColor: "#ccc",
          backgroundColor: "#fff",
        }}
      >
        <TextInput
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 20,
            paddingHorizontal: 15,
            marginRight: 10,
          }}
          placeholder="Write a comment..."
          value={commentInput}
          onChangeText={setCommentInput}
        />
        <TouchableOpacity
          onPress={addComment}
          style={{
            backgroundColor: "#34a853",
            borderRadius: 20,
            paddingVertical: 10,
            paddingHorizontal: 20,
            justifyContent: "center",
          
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize:  20, }}>Comment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}