export async function fetchUserPromise() {
    const res = await fetch('http://localhost:5000/api/current_user');
    const data = await res.json();
    if (res.ok) {
      // console.log(data)
      return data;
    }
  }
  