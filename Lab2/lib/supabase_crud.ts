import supabase from "./supabase";

const TABLE_NAME = "sampledatabase";

// READ
export async function getUsers() {
  const { data, error } = await supabase.from(TABLE_NAME).select("*");
  if (error) throw error;
  return data;
}

// CREATE
export async function addUser(first_name: string, last_name: string, Status: boolean) {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .insert([{ first_name, last_name, Status }]);
  if (error) throw error;
  return data;
}

// UPDATE
export async function updateUser(id: string, updatedFields: { first_name?: string; last_name?: string; Status?: boolean }) {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update(updatedFields)
    .eq("id", id);
  if (error) throw error;
  return data;
}

// DELETE
export async function deleteUser(id: string) {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .delete()
    .eq("id", id);
  if (error) throw error;
  return data;
}
