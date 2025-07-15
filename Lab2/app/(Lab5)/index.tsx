import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Button,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";
import {
  getUsers,
  deleteUser,
  updateUser,
  addUser,
} from "../../lib/supabase_crud";

export default function Lab5() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any[]>([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [editingUserId, setEditingUserId] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteUser(id);
      Alert.alert("Deleted", "User deleted successfully");
      fetchData();
    } catch (err) {
      console.error("Delete error:", err);
      Alert.alert("Error", "Failed to delete user");
    }
  };

  const handleToggleStatus = async (
    id: string,
    currentStatus: boolean
  ) => {
    try {
      await updateUser(id, { Status: !currentStatus });
      fetchData();
    } catch (err) {
      console.error("Update error:", err);
      Alert.alert("Error", "Failed to update status");
    }
  };

  const handleCreateUser = async (firstName: string, lastName: string) => {
    try {
      await addUser(firstName, lastName, true);
      Alert.alert("Success", "User created successfully");
      fetchData();
    } catch (err) {
      console.error("Create error:", err);
      Alert.alert("Error", "Failed to create user");
    }
    setFirstName("");
    setLastName("");
  };

  const handleUpdateUser = async () => {
    if (!editingUserId) return;
    try {
      await updateUser(editingUserId, {
        first_name: firstName,
        last_name: lastName,
      });
      Alert.alert("Success", "User name updated");
      fetchData();
      setEditingUserId(null);
      setFirstName("");
      setLastName("");
    } catch (err) {
      console.error("Update name error:", err);
      Alert.alert("Error", "Failed to update name");
    }
  };

  const handleStartEditing = (id: string, first: string, last: string) => {
    setEditingUserId(id);
    setFirstName(first);
    setLastName(last);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lab 5: Fetching Data</Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <FlatList
            data={users}
            style={{ maxHeight: 400, marginBottom: 20 }}
            keyExtractor={(item) =>
              item.id?.toString() ?? Math.random().toString()
            }
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.location}>
                  {item.first_name} {item.last_name}
                </Text>
                <Text>
                  Status: {item.Status ? "✅ Active" : "❌ Inactive"}
                </Text>
                <Text>ID: {item.id}</Text>
                <View style={styles.buttonGroup}>
                  <Button
                    title="Delete"
                    color="red"
                    onPress={() => handleDelete(item.id)}
                  />
                  <Button
                    title={item.Status ? "Deactivate" : "Activate"}
                    onPress={() =>
                      handleToggleStatus(item.id, item.Status)
                    }
                  />
                  <Button
                    title="Edit Name"
                    onPress={() =>
                      handleStartEditing(
                        item.id,
                        item.first_name,
                        item.last_name
                      )
                    }
                  />
                </View>
              </View>
            )}
          />

          <View style={styles.card}>
            <Text style={styles.title}>
              {editingUserId ? "Update User Name" : "Add New User"}
            </Text>
            <TextInput
              placeholder="First Name"
              onChangeText={setFirstName}
              value={firstName}
              style={styles.textInput}
            />
            <TextInput
              placeholder="Last Name"
              onChangeText={setLastName}
              value={lastName}
              style={styles.textInput}
            />

            <View style={styles.buttonGroup}>
              {editingUserId ? (
                <Button
                  title="Update User"
                  color="orange"
                  onPress={handleUpdateUser}
                />
              ) : (
                <Button
                  title="Add User"
                  onPress={() => handleCreateUser(firstName, lastName)}
                />
              )}
              {editingUserId && (
                <Button
                  title="Cancel"
                  color="gray"
                  onPress={() => {
                    setEditingUserId(null);
                    setFirstName("");
                    setLastName("");
                  }}
                />
              )}
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  location: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  buttonGroup: {
    flexDirection: "column",
    gap: 0,
    marginTop: 0,
  },
  textInput: {
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 6,
    backgroundColor: "white"
  },
});
