<script lang="ts">
  let { data } = $props();

  const METABASE_SITE_URL = "https://metabase-production-26d4.up.railway.app";

  const iframeUrl = `${METABASE_SITE_URL}/embed/dashboard/${data.token}#bordered=true&titled=true`;
</script>

<iframe
  src={iframeUrl}
  width="1500"
  height="1000"
  style="border:none"
  allowtransparency={true}
  title="Metabase Dashboard"
></iframe>
