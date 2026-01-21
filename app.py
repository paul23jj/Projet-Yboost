import streamlit as st

st.title("Mon premier projet IA")
nom = st.text_input("Comment tu t'appelles ?")

if nom:
    st.write(f"Salut {nom}, prêt à générer des assets ?")