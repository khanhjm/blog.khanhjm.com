<template>
  <div id="title" class="navbar-dark" style="background-color: #80ffff">
    <div class="container content-space-1 content-space-b-lg-3">
      <div class="row align-items-center">
        <div class="col">Personal info</div>
        <div class="col-auto">
          <div class="d-none d-lg-block">
            <a class="btn btn-outline-dark">Follow</a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarNav"
            aria-controls="sidebarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-default"><i class="bi-list" /></span>
            <span class="navbar-toggler-toggled"><i class="bi-x" /></span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    id="content"
    class="container content-space-1 content-space-t-lg-0 content-space-b-lg-2 mt-lg-n10"
    style="background-color: #0080ff"
  >
    <div class="row">
      <div class="col-lg-3" style="height: 150px; background-color: #ffff00">
        <div class="navbar-expand-lg navbar-light"></div>
      </div>
      <div class="col-lg-9" style="height: 150px; background-color: #008000">
        <div class="d-grid gap-3 gap-lg-5"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.content-space-1 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}
*,
::after,
::before {
  box-sizing: border-box;
}
@media (min-width: 992px) {
  .content-space-b-lg-3 {
    padding-bottom: 7.5rem !important;
  }
  .content-space-b-lg-2 {
    padding-bottom: 5rem !important;
  }
  .mt-lg-n10 {
    margin-top: -4.5rem !important;
  }
  .content-space-t-lg-0 {
    padding-top: 0 !important;
  }
}
</style>
