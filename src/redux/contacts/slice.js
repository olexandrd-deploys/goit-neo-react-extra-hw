import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import toast from "react-hot-toast";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], loading: false, error: null },
  reducers: {
    flushContacts: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.loading = false;
        state.error = null;
        toast.success("Contact added");
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
        state.loading = false;
        state.error = null;
        toast.success("Contact deleted");
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { flushContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
