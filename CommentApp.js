import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function CommentApp() {
  const [comments, setComments] = useState([]); // list of comments
  const [newComment, setNewComment] = useState(""); // new comment text
  const [replyText, setReplyText] = useState(""); // reply text
  const [activeReplyId, setActiveReplyId] = useState(null); // which comment is being replied to

  // Add a new top-level comment
  const addComment = () => {
    if (newComment.trim() === "") return;
    const newItem = {
      id: Date.now().toString(),
      text: newComment,
      likes: 0,
      replies: [],
    };
    setComments([...comments, newItem]);
    setNewComment("");
  };

  // Like a comment
  const likeComment = (id) => {
    setComments(
      comments.map((c) =>
        c.id === id ? { ...c, likes: c.likes + 1 } : c
      )
    );
  };

  // Add a reply to a comment
  const addReply = (id) => {
    if (replyText.trim() === "") return;
    setComments(
      comments.map((c) =>
        c.id === id
          ? {
              ...c,
              replies: [...c.replies, { id: Date.now().toString(), text: replyText }],
            }
          : c
      )
    );
    setReplyText("");
    setActiveReplyId(null);
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentContainer}>
      <Text style={styles.commentText}>{item.text}</Text>

      {/* Like & Reply buttons */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => likeComment(item.id)}>
          <Text style={styles.likeText}>👍 {item.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveReplyId(item.id)}>
          <Text style={styles.replyText}>💬 Reply</Text>
        </TouchableOpacity>
      </View>

      {/* Show reply input if active */}
      {activeReplyId === item.id && (
        <View style={styles.replyInputRow}>
          <TextInput
            style={styles.replyInput}
            placeholder="Write a reply..."
            value={replyText}
            onChangeText={setReplyText}
          />
          <Button title="Send" onPress={() => addReply(item.id)} />
        </View>
      )}

      {/* Replies */}
      {item.replies.length > 0 && (
        <View style={styles.replyContainer}>
          {item.replies.map((r) => (
            <Text key={r.id} style={styles.replyTextItem}>
              ↳ {r.text}
            </Text>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Comment List */}
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          renderItem={renderComment}
        />

        {/* New Comment Input */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Write a comment..."
            value={newComment}
            onChangeText={setNewComment}
          />
          <Button title="Post" onPress={addComment} />
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
  commentContainer: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  commentText: {
    fontSize: 16,
    marginBottom: 5,
  },
  actions: {
    flexDirection: "row",
    marginBottom: 5,
  },
  likeText: {
    marginRight: 15,
    color: "blue",
  },
  replyText: {
    color: "green",
  },
  replyInputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  replyInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 5,
    backgroundColor: "#fff",
  },
  replyContainer: {
    marginTop: 5,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: "#ddd",
  },
  replyTextItem: {
    fontSize: 14,
    color: "#555",
    marginVertical: 2,
  },
  inputRow: {
    flexDirection: "row",
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