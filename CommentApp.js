import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from "react-native";

export default function CommentApp() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <View style={styles.container}>
      {/* Label */}
      <Text style={styles.label}>Enter your comment:</Text>

      {/* Input box */}
      <TextInput
        style={styles.input}
        placeholder="Type something here..."
        value={comment}
        onChangeText={setComment}
      />

      {/* Submit button */}
      <Button title="Post Comment" onPress={addComment} />

      {/* Comments container */}
      <View style={styles.commentsContainer}>
        <Text style={styles.output}>Comments:</Text>
        <ScrollView style={styles.commentList}>
          {comments.map((c, index) => (
            <View key={index} style={styles.comment}>
              <Text>{c}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    flex: 1,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#888",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  commentsContainer: {
    flex: 1,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    backgroundColor: "#fdfdfd",
    padding: 10,
  },
  output: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  commentList: {
    flex: 1,
  },
  comment: {
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 8,
  },
});