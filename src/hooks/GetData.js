import { ref, reactive, computed } from "vue";
import axios from "../components/scripts/axios-api";

const useGetSingleObject = function() {
  let error = false;
  const isLoading = ref(true);
  const data = reactive({});

  const allGood = computed(function() {
    return !error && data.response && !isLoading.value;
  });

  function getData(endPoint, id) {
    axios
      .get(endPoint + "/" + id)
      .then((response) => {
        data.response = response.data;
      })
      .catch((axiosError) => {
        error = axiosError;
        console.log(error);
      })
      .finally(() => {
        isLoading.value = false;
      });
  }

  return {
    isLoading,
    data,
    allGood,
    getData,
  };
};

const useGetObjects = function(endPoint) {
  let error = false;
  const isLoading = ref(true);
  const data = reactive({});

  const allGood = computed(function() {
    return !error && data.response && !isLoading.value;
  });

  function getData() {
    axios
      .get(endPoint)
      .then((response) => {
        data.response = response.data.results;
      })
      .catch((axiosError) => {
        error = axiosError;
        console.log(error);
      })
      .finally(() => {
        isLoading.value = false;
      });
  }

  return {
    isLoading,
    data,
    allGood,
    getData,
  };
};

export { useGetSingleObject, useGetObjects };
