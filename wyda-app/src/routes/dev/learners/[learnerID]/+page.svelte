<script lang="ts">
  //display all user information from props data given by server load function
  let { data } = $props();
  const profileInfo = data;
  console.log(profileInfo);
</script>

<div>
  id: {profileInfo.id}
</div>
<div>
  first name: {profileInfo.firstName}
</div>
