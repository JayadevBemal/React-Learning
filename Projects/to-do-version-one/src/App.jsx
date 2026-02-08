function App() {
  return (
    <div class="todo-container">
      <h1 style={{ textAlign: "center" }}> Todo App</h1>

      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter ToDo Here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Success
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-6">Jayadev</div>
          <div class="col-4">04/03/2026</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-6">Ayesha</div>
          <div class="col-4">05/05/2027</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
