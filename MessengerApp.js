
import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, SafeAreaView } from "react-native";

export default function MessengerApp() {
  const [messages, setMessages] = useState([]); // store all messages in an array
  const [newMessage, setNewMessage] = useState(""); // store current text input

  const sendMessage = () => {
    if (newMessage.trim() === "") return; // don't send empty messages

    // Add new message to array
    setMessages([...messages, { id: Date.now().toString(), text: newMessage }]);
    setNewMessage(""); // clear input
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Chat Messages */}
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.messageBubble}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
        />

        {/* Input and Button */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={newMessage}
            onChangeText={setNewMessage}
          />
          <Button title="Send" onPress={sendMessage} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    padding: 10,
  },
  messageBubble: {
    backgroundColor: "#d1e7ff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    alignSelf: "flex-start", // left side like Messenger
    maxWidth: "80%",
  },
  messageText: {
    fontSize: 16,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    backgroundColor: "white",
  },
});