const Data_URL = "../appData.json";
const postsSection = document.querySelectorAll("[data-posts-category]");

getPosts(Data_URL);
async function getPosts(url) {
  const responce = await fetch(url);
  const data = await responce.json();
  showPostSection(data);
}
function showPostSection(data) {
  postsSection.forEach((section) => {
    //getting current section node
    const currentSection = section;
    // clearing current section's inner html
    currentSection.innerHTML = ``;
    // getting current section's category name
    const categoryName = section.dataset.postsCategory;
    // searching available data which matches with current section's category name and storing it in variable
    const categoryData = data.find((category) => {
      return category.name === categoryName;
    });
    //creating html structure
    // creating container
    const sectionContainer = document.createElement("div");
    sectionContainer.classList.add("container");
    // creating row inside container (container > row )
    // row structure (container > row > textwrapper + posts wrapper)
    const row = document.createElement("div");
    row.classList.add("row", "gy-4");
    // creating textWrapper inside row (container > row > textwrapper )
    const textWrapper = document.createElement("div");
    textWrapper.classList.add("col-12", "col-sm-10", "col-md-8", "col-lg-7");
    textWrapper.innerHTML = `
    <h2 class="cl-blue-900">
                We help more than 1500 companies from all sectors
              </h2>
              <p class="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et, mattis
                purus. Vivamus commodo suscipit tellus et pellentesque.
              </p>
    `;
    // creating textWrapper inside row (container > row > postWrapper )
    const PostWrapper = document.createElement("div");
    PostWrapper.classList.add(
      "row",
      "row-cols-1",
      "row-cols-sm-2",
      "row-cols-md-3",
      "mt-3",
      "gy-4"
    );
    PostWrapper.innerHTML = ``;
    const postObj = categoryData.PostsObject;
    postObj.forEach((post) => {
      const { title, imgURL, description } = post;
      const PostEl = document.createElement("div");
      PostEl.classList.add("col");
      PostEl.innerHTML = `
      <div class="card h-100 border-0">
      <img
        src="${imgURL}"
        class="card-img-top b-6"
        alt="${title}"
      />
      <div class="card-body px-0 py-4">
        <h5 class="card-title cl-primary-800">${title}</h5>
        <p class="card-text cl-battelshipGrey-600">
        ${description}
        </p>
        <a href="#" class="cl-primary">Card link <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>
          `;
      PostWrapper.appendChild(PostEl);
    });
    row.appendChild(textWrapper);
    row.appendChild(PostWrapper);
    sectionContainer.appendChild(row);
    currentSection.appendChild(sectionContainer);
  });
}
function showPosts(postsObj) {
  postsObj.forEach((post) => {});
}
